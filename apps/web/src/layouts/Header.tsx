import ViewContainer from "./ViewContainer";

function Header() {
    return (
        <>
            <ViewContainer className="bg-pink-300 h-16 flex items-center">
                <nav className="
                    flex justify-between
                    text-white
                    ">
                    <div className="text-2xl font-semibold hover:text-gray-100">MOAYO</div>
                    <div className="flex justify-between items-center space-x-4">
                        <div className="hover:text-gray-100">로그인</div>
                        <div className="hover:text-gray-100">회원가입</div>
                    </div>
                </nav>
            </ViewContainer>
        </>
    )
}

export default Header;