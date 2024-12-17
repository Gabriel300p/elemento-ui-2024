export type Dictionary = {
  title: string;
  description: string;
  sidebar: {
    contact: string;

    paragraph: string;
    phone: string;
  };
  form: {
    title: string;
    titleHighlight: string;
    titleEnd: string;
    subtitle: string;
    name: string;
    email: string;
    selectOption: string;
    howYouKnow: string;
    message: string;
    messagePlaceholder: string;
    howToHelp: string;
    submit: string;
    submitting: string;
    success: string;
    error: string;
  };
  howYouKnowOptions: Record<string, string>;
  howToHelpOptions: Record<string, string>;
};
