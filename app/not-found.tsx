const NotFoundPage = () => {
    return ( 
        <div className="w-screen h-screen grid content-center text-center background_gradient">
            <div className="mx-auto flex flex-row flex-nowrap h-24 items-center text-5xl gap-8">
                <h1 className="text-6xl">404</h1>
                <div className="bg-black w-1 h-full"></div>
                <h1>This page was not found</h1>
            </div>
        </div>
     );
}
 
export default NotFoundPage;