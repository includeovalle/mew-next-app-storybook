import { childrenInterface, classNamesInterface } from '@/app/types'

export default interface Props extends childrenInterface, classNamesInterface {
    type?: "button" | "submit" | "reset" | undefined;
    onClick?: (e?: React.MouseEvent<HTMLButtonElement>) => void;
    autoFocus?: boolean;
}
