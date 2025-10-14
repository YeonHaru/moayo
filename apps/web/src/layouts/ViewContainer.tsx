import type {ReactNode} from "react";

type Props = {
    children: ReactNode;
    className?: string;
}

function ViewContainer({children, className = ""}: Props) {
    return (
        // 배경색 전달
        <div className={className}>  
            <div
                className="
                    w-[99vw] sm:w-[90vw] xl:w-[60vw]
                    mx-auto px-4
                    "
            >
                {children}
            </div>
        </div>
    )
}

export default ViewContainer;