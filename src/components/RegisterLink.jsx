import { REGISTER_URL } from "../config";

export default function RegisterLink({ className = "btn btn-primary", children = "Register now" }) {
  return (
    <a className={className} href={REGISTER_URL} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
}