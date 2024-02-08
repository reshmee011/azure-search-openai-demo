import { Example } from "./Example";

import styles from "./Example.module.css";

const DEFAULT_EXAMPLES: string[] = ["How do I approach burns as a first aider?", "What is the role of first aider?", "How to perform CPR?"];

const GPT4V_EXAMPLES: string[] = [
    "What is the latest changes in the first aid guidelines?",
    "What is the law related the first aid within the UK?",
    "How is first aid practice different in the UK and Finland in terms of preserving life?"
];

interface Props {
    onExampleClicked: (value: string) => void;
    useGPT4V?: boolean;
}

export const ExampleList = ({ onExampleClicked, useGPT4V }: Props) => {
    return (
        <ul className={styles.examplesNavList}>
            {(useGPT4V ? GPT4V_EXAMPLES : DEFAULT_EXAMPLES).map((question, i) => (
                <li key={i}>
                    <Example text={question} value={question} onClick={onExampleClicked} />
                </li>
            ))}
        </ul>
    );
};
