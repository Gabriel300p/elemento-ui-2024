import { render } from "@react-email/render";
import { Email } from "./email";

const emailHTML = render(<Email />, {
  pretty: true,
});

export default emailHTML;
