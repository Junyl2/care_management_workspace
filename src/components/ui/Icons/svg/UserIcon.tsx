import React from 'react'
import { IconProps } from '../types';

type UserIconProps = IconProps & {
    backgroundFill?: string;
}

const UserIcon = (props: UserIconProps) => {
    const { fill = '#262C31', style, className, size = 38, backgroundFill = '#636C73' } = props;
    return (
        <svg width={size} height={size} viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg" style={style} className={className}>
            <circle cx="19" cy="19" r="19" fill={backgroundFill} />
            <circle cx="19" cy="12.625" r="5.25" fill={fill} />
            <path d="M8.5 28.375C8.5 22.576 13.201 17.875 19 17.875C24.799 17.875 29.5 22.576 29.5 28.375H8.5Z" fill={fill} />
        </svg>
    )
}

export default UserIcon