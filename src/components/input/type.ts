export interface IInputProps{
    htmlForID: string;
    textLabel: string;
    type: string;
    placeholder?: string;
    name?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    value?: string;
}