import Navbar from "./Navbar"

const Layout = ({children}) => {
    return (
        <div className="pt-20 pb-5 overflow-x-hidden bg-gradient-to-r from-gray-100 to-slate-300 ">
            <Navbar />
            {children}
        </div>
    )
}

export default Layout
