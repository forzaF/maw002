import React, { useRef, useLayoutEffect, useState } from "react";
import {
  View,
  ImageBackground,
  Animated,
  TouchableWithoutFeedback,
  Dimensions,
} from "react-native";

let winheightBS = Dimensions.get("screen").height;

export default function BottomCard({
  show = false,
  children,
  style = {},
  ...propsSansStyle
}) {
  const layoutHeight = useRef(0);
  // Dynamic card height, initialized as zero
  const translateYValue = useRef(new Animated.Value(0));
  // Animated value for Y-axis translation
  const opacityValue = useRef(new Animated.Value(0));
  // Animated value for component opacity
  const transform = [
    {
      translateY: translateYValue.current.interpolate({
        inputRange: [0, 1],
        outputRange: [layoutHeight.current, 0],
      }),
    },
  ];
  // Transform for Y-axis translation, interpolating from Y=cardLayoutHeight to Y=0 (slide-up animation)
  const [pointerEvents, setPointerEvents] = useState("auto");
  // State for pointerEvents

  const onLayout = ({ nativeEvent }) =>
    (layoutHeight.current = nativeEvent.layout.height);
  // To set the value of layoutHeight (the useRef variable we defined earlier) you use its "current" property. That's just how it works.

  const animateIn = () => {
    setPointerEvents("auto");
    // Once we animate IN, we want the component to be clickable.
    Animated.parallel([
      // We have 2 animations to run in parallel. The first one is the card sliding-up, the second one is the whole component's opacity, to make it fade in and out as the card is sliding.
      Animated.timing(translateYValue.current, {
        toValue: 1,
        // the Y value we're going to use
        useNativeDriver: true,
        duration: 250,
      }),
      Animated.timing(opacityValue.current, {
        toValue: 1,
        // the target opacity
        useNativeDriver: true,
        duration: 250,
      }),
    ]).start();
  };

  const animateOut = () => {
    // Pretty much the same as animateIn() but inverted
    Animated.parallel([
      Animated.timing(translateYValue.current, {
        toValue: 0,
        useNativeDriver: true,
        duration: 250,
      }),
      Animated.timing(opacityValue.current, {
        toValue: 0,
        useNativeDriver: true,
        duration: 250,
      }),
    ]).start(() => setPointerEvents("none"));
    // start() admits a callback to execute stuff when the animation ends, so we'll just make the component click-through then
  };

  // useLayoutEffect ensures this is run right after we obtain the layoutHeight value (we'll see how in a moment).
  useLayoutEffect(() => {
    if (show) {
      // If the show property is true, this means we want to show the card, so run the animateIn() function.
      animateIn();
    } else {
      // Else, we want to close it.
      animateOut();
    }
  }, [show]);
  // useEffect and useLayoutEffect allow defining dependencies in an array as the second parameter. This means that whenever show (which is one of the component's properties, remember?) updates, this effect will be executed.
  return (
    <View style={{ ...containerStyle, ...style }} pointerEvents={pointerEvents}>
      <Animated.View style={opacityContainerStyle(opacityValue.current)}>
        {/* <!-- Wrap everything in ImageBackground, which is a gradient image, to achieve the "modal effect" --> */}
        <ImageBackground
          // source={require("../../assets/img/Pinot-Noir.png")}
          style={overlayStyle}
        >
          <React.Fragment>
            {/* <!-- An empty, touchable View with width and height of 100%, which represents the clickable background that will (maybe) trigger animateOut() --> */}
            <TouchableWithoutFeedback onPress={propsSansStyle.onExit}>
              <View style={escapeHatchStyle} />
            </TouchableWithoutFeedback>
            {/* <!-- This is the actual card view, note that its Animated.View instead of just View --> */}
            <Animated.View
              onLayout={onLayout}
              style={{ ...cardStyle, transform }}
            >
              {children}
            </Animated.View>
          </React.Fragment>
        </ImageBackground>
      </Animated.View>
    </View>
  );
}

const cardStyle = {
    position: "absolute",
    left: 0,
    bottom: 0,
    backgroundColor: "#fff",
    zIndex: 10,
    width: "100%",
    borderTopRightRadius: 22,
    borderTopLeftRadius: 22,
  },
  overlayStyle = {
    position: "absolute",
    zIndex: 4,
    flex: 1,
    width: "100%",
    height: "100%",
  },
  /** * opacityContainerStyle needs to be a function of * opacityValue.current in order to animate the components * opacity. **/
  opacityContainerStyle = (opacity) => ({
    height: "100%",
    width: "100%",
    opacity,
  }),
  containerStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    height: "100%",
    width: "100%",
    zIndex: 3,
  },
  escapeHatchStyle = { height: "100%", width: "100%" };
