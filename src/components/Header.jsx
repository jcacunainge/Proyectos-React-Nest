import { Link } from "wouter";
const HeaderComponent = () => {
    return (
        <>
            <header className="text-gray-600 body-font bg-black-500">
                <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                    <Link href="/">
                        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                            <span className="ml-3 text-xl">App Restaurants</span>
                        </a>
                    </Link>
                    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                        <Link href="/pagesForm" className="mr-5 hover:text-gray-900 ml-3 text-xl">add restaurant</Link>
                        <a className="mr-5 hover:text-gray-900 ml-3 text-xl">delete restaurant</a>
                        <a className="mr-5 hover:text-gray-900 ml-3 text-xl">edit restaurant</a>
                    </nav>
                </div>
            </header>
        </>
    );
};

export default HeaderComponent;