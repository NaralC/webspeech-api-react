import * as React from "react";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import { Typography, Button, Flex } from "antd";

const Voice: React.FC = () => {
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser does not support speech recognition.</span>;
  }

  return (
    <div style={{ maxWidth: "500px", padding: "2rem" }}>
      <Flex justify="center">
        <Typography.Title>Say something cool</Typography.Title>
      </Flex>
      <Typography.Title level={5}>
        Generated Text: {transcript}
      </Typography.Title>
      <Typography.Title level={5}>
        Microphone: {listening ? "Listing to your voice.." : "off"}
      </Typography.Title>
      <Flex vertical gap={10}>
        <Button
          type="primary"
          onClick={() => SpeechRecognition.startListening({ continuous: true })}
        >
          Start
        </Button>
        <Button
          type="primary"
          onClick={() => SpeechRecognition.stopListening()}
          danger
        >
          Stop
        </Button>
        <Button type="default" onClick={() => resetTranscript()}>
          Reset
        </Button>
      </Flex>
    </div>
  );
};

export default Voice;
