import React, { useState, useEffect } from "react";
import { View, StyleSheet, Dimensions, PanResponder, Text, TouchableOpacity } from "react-native";

const { width, height } = Dimensions.get("window");
const ballRadius = 8;
const paddleWidth = 100;
const paddleHeight = 5;
const brickRowCount = 15;
const brickColumnCount = 7;
const brickWidth = width / brickColumnCount - 1.8;
const brickHeight = 14;
const brickOffsetTop = 100;
const brickGap = 2;

// Define the colors
const brickColors = [
  "#141F2C", // work
  "#024886", // sports
  "#6D7D8D", // study
  "#B4C5D6", // family
  "#E9942F", // food
  "#9D8266", // friends
  "#A5A1A0", // grocery
  "#DAEBFD", // rest
];

const PlayScreen = () => {
  const [ballPosition, setBallPosition] = useState({ x: width / 2, y: height / 2 });
  const [ballDirection, setBallDirection] = useState({ dx: 2, dy: -2 });
  const [paddlePosition, setPaddlePosition] = useState(width / 2 - paddleWidth / 2);
  const [bricks, setBricks] = useState([]);
  const [gameRunning, setGameRunning] = useState(false);

  const initializeBricks = () => {
    return Array.from({ length: brickRowCount }, (_, row) =>
      Array.from({ length: brickColumnCount }, (_, col) => ({
        x: col * (brickWidth + brickGap),
        y: row * (brickHeight + brickGap) + brickOffsetTop,
        status: 1,
        color: brickColors[Math.floor(Math.random() * brickColors.length)], // Randomly assign color
      }))
    );
  };

  useEffect(() => {
    setBricks(initializeBricks());
  }, []);

  const panResponder = PanResponder.create({
    onMoveShouldSetPanResponder: () => true,
    onPanResponderMove: (evt, gestureState) => {
      setPaddlePosition(Math.max(0, Math.min(width - paddleWidth, gestureState.moveX - paddleWidth / 2)));
    },
  });

  useEffect(() => {
    if (!gameRunning) return;

    const interval = setInterval(() => {
      setBallPosition((prev) => {
        let { x, y } = prev;
        let { dx, dy } = ballDirection;

        // Ball collision with walls
        if (x + dx > width - ballRadius || x + dx < ballRadius) {
          dx = -dx;
        }
        if (y + dy < ballRadius) {
          dy = -dy;
        } else if (y + dy > height - 300 - ballRadius) {
          // Check for collision with the paddle
          if (x > paddlePosition && x < paddlePosition + paddleWidth) {
            dy = -dy;
          } else if (y + dy > height - ballRadius) {
            clearInterval(interval);
            alert("Game Over");
            setGameRunning(false);
            return { x: width / 2, y: height / 2 }; // Reset to center
          }
        }

        // Ball collision with bricks
        const newBricks = bricks.map((row) =>
          row.map((brick) => {
            if (brick.status === 1) {
              if (
                x > brick.x &&
                x < brick.x + brickWidth &&
                y > brick.y &&
                y < brick.y + brickHeight
              ) {
                dy = -dy;
                return { ...brick, status: 0 };
              }
            }
            return brick;
          })
        );
        setBricks(newBricks);

        setBallDirection({ dx, dy });
        return { x: x + dx, y: y + dy };
      });
    }, 10);

    return () => clearInterval(interval);
  }, [ballDirection, paddlePosition, bricks, gameRunning]);

  const startGame = () => {
    setBricks(initializeBricks()); // Rebuild the bricks
    setBallPosition({ x: width / 2, y: height / 2 }); // Reset ball position
    setGameRunning(true);
  };

  return (
    <View style={styles.container} {...panResponder.panHandlers}>
      {!gameRunning && (
        <View style={styles.startButtonContainer}>
          <TouchableOpacity onPress={startGame} style={styles.startButton}>
            <Text style={styles.startButtonText}>START</Text>
          </TouchableOpacity>
        </View>
      )}
      <View
        style={[
          styles.ball,
          { left: ballPosition.x - ballRadius, top: ballPosition.y - ballRadius },
        ]}
      />
      <View
        style={[
          styles.paddle,
          { left: paddlePosition, bottom: 300 },
        ]}
      />
      {bricks.map((row, rowIndex) =>
        row.map(
          (brick, colIndex) =>
            brick.status === 1 && (
              <View
                key={`${rowIndex}-${colIndex}`}
                style={[
                  styles.brick,
                  { left: brick.x, top: brick.y, backgroundColor: brick.color },
                ]}
              />
            )
        )
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#C4C4C4",
    justifyContent: "center",
    alignItems: "center",
  },
  startButtonContainer: {
    position: "absolute",
    bottom: 100,
  },
  startButton: {
    backgroundColor: "#141F2C",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: "center",
  },
  startButtonText: {
    fontSize: 10,
    color: "#FFFFFF",
  },
  ball: {
    position: "absolute",
    width: ballRadius * 2,
    height: ballRadius * 2,
    borderRadius: ballRadius,
    backgroundColor: "#2D2D20",
  },
  paddle: {
    position: "absolute",
    width: paddleWidth,
    height: paddleHeight,
    backgroundColor: "#2D2D20",
  },
  brick: {
    position: "absolute",
    width: brickWidth,
    height: brickHeight,
    backgroundColor: "#E9942F",
  },
});

export default PlayScreen;
