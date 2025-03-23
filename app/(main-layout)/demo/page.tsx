import { Button, HStack } from "@chakra-ui/react";
import styles from "./demo.module.css";

const Demo = () => {
  return (
    <HStack>
      <Button className={styles.primaryText}>Click me</Button>
    </HStack>
  );
};

export default Demo;
