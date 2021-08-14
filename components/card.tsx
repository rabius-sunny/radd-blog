import Link from 'next/link'
// import { makeStyles } from '@material-ui/core/styles';
// import makeStyles from '@material-ui/styles/makeStyles'
import Card from '@material-ui/core/Card';

import CardActionArea from '@material-ui/core/CardActionArea';

// import CardContent from '@material-ui/core/CardContent';
// import CardMedia from '@material-ui/core/CardMedia';
// import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';



// let widtH = window.innerWidth

const PostCard = ({ data }: any) => {

    // const useStyles: Function = makeStyles({
    //     root: {
    //         maxWidth: 345,
    //         margin: '15px auto',
    //         boxShadow: '2px 2px 10px rgba(0, 0, 0, 0.3)'
    //     },
    // })

    const { _id, image, title, exerpt } = data
    // const classes = useStyles();
    const s = {
        card: {
            display: 'flex',
            width: '100%',
            maxHeight: '150px',
            overflow: 'hidden',
            boxShadow: '1px 1px 10px #0000004f',
            borderRadius: '10px'
        },
        info: {
            padding: '10px',
            fontFamily: 'kalpurush'
        },
        p: {
            fontSize: '12px'
        }
    }
    return (
        <Grid item md={4} sm={6} xs={12}>
            <div style={{ margin: '15px' }}>
                {/* {widtH >= 600 && <Card className={classes.root}>
                    <Link href={`/post/${_id}`} passHref >
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                alt="Contemplative Reptile"
                                height="200"
                                image={image}
                                title={title}
                            />
                            <CardContent>
                                <Typography className="banglaFont" gutterBottom variant="h5" component="h2">
                                    {title}
                                </Typography>
                                <Typography className="banglaFont" variant="body2" color="textSecondary" component="p">
                                    {exerpt}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Link>
                </Card>} */}
                <Card>
                    <Link href={`/post/${_id}`} passHref>
                        <CardActionArea>
                            <div style={s.card}>
                                <img width="50%" src={image} alt="postImg" />
                                <div className="card" style={s.info}>
                                    <h5>{title}</h5>
                                    <p style={s.p}>{exerpt}</p>
                                </div>
                            </div>
                        </CardActionArea></Link>
                </Card>
            </div>
        </Grid>
    )
}

export default PostCard