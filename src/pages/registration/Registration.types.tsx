import { ReactNode } from "react";

export interface ScreenProps {
  render: ReactNode;
}

export interface RegistrationProps {
  goToNext: () => void;
}
