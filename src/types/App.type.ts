export interface MenuState {
  firstId: string;
  firstIsOpen: boolean;
  secondId: string;
  secondIsOpen: boolean;
  thirdId: string;
  thirdIsOpen: boolean;
}

// export interface GetMenuStateProps extends MenuState {
//   name: string;
//   level: string;
// }

export interface GetMenuStateProps {
  firstId: string;
  firstIsOpen: boolean;
  secondId: string;
  secondIsOpen: boolean;
  level: string;
  name: string;
}

export type GetMenuState = ({
  firstId,
  firstIsOpen,
  secondId,
  secondIsOpen,
  name,
  level,
}: GetMenuStateProps) => MenuState;

export interface GetCloseMenuStateProps {
  firstId: string;
  firstIsOpen: boolean;
  secondId: string;
  secondIsOpen: boolean;
  level: string;
}

export type GetCloseMenuState = ({
  firstId,
  firstIsOpen,
  secondId,
  secondIsOpen,
  level,
}: GetCloseMenuStateProps) => MenuState;
