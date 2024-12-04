export type Dictionary = {
  title: string;
  description: string;
  form: {
    title: string;
    titleHighlight: string;
    titleEnd: string;
    subtitle: string;
    name: string;
    email: string;
    howYouKnow: string;
    message: string;
    howToHelp: string;
    submit: string;
    submitting: string;
    success: string;
    error: string;
  };
  howYouKnowOptions: Record<string, string>;
  howToHelpOptions: Record<string, string>;
};
