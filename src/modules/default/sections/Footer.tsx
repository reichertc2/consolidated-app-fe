export default function Footer() {

    const getCopyRightYear = () =>{
    
        let yearDate: Date= new Date()
        let copyRightInfo = `${yearDate.getFullYear()}`

        return copyRightInfo
    }

    return (
        <footer
            className="text-center bg-zinc-400 text-zinc-100 h-1/6"
        >
            <div
                className="m-auto m-0 pt-6"
            >
                Chris Reichert 	&copy; {getCopyRightYear()}
            </div>
        </footer>
    );
}
