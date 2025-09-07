export interface ISearchProps {
  hasError: boolean;
  onSubmit: (text: string) => void;
}

export type TFormFields = {
  username: HTMLInputElement;
};
