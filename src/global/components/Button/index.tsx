import { Content } from './styles'
import { IContentProps } from './type'

export function ButtonComponent({
    icon,
    haveIcon,
    title,
    disabled,
    onClick,
    type,
    primary,
}: IContentProps) {
    return (
        <Content
            onClick={onClick}
            type={type}
            primary={primary}
            disabled={disabled}
        >
            <span>{title}</span>
            {haveIcon && <span className="icon">{icon}</span>}
        </Content>
    )
}
