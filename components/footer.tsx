import { Toolbar } from "@material-ui/core"

const Footer = () => {
    return <div style={{ position: 'sticky' }}>
        <Toolbar style={{ justifyContent: 'center', background: '#dc004e', color: 'whitesmoke' }}>
            {/* eslint-disable-next-line */}
            <p style={{ fontFamily: 'sans-serif' }}>Copyright opened | Share articles with mentioning sources and without any corruption <a style={{ border: '1px solid white', padding: '5px 10px', borderRadius: '15px', margin: '0 10px' }} href="#">^</a></p>
        </Toolbar>
    </div>

}

export default Footer