export interface IContentProps {
    title: string
    disabled?: boolean
    onClick: () => void
    type: 'submit' | 'button' | 'reset'
    primary?: boolean
    haveIcon?: boolean
    icon?: any
}

export interface IPrimaryProps {
    primary?: boolean
}
