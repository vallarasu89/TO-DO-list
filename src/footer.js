
function Footer({length}){
    // const year=new Date()

    return(
        // <footer>Copyright &copy; {year.getFullYear()}</footer>
        <footer>{length} List {length===1?'Item':'Items'} </footer>
    )
}

 export default Footer;
