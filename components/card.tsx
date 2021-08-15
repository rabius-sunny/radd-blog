import Link from 'next/link'
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { Grid } from '@material-ui/core';
import { DesktopCard, MobileCard } from '../styles/customs/wrappers';
import { BanglaTypo } from '../styles/customs/typo';

const PostCard = ({ data }: any) => {

    const { _id, image, title, exerpt } = data
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
            padding: '0 10px',
            fontFamily: 'kalpurush'
        },
        p: {
            fontSize: '12px'
        }
    }
    return (
        <Grid item md={4} sm={6} xs={12}>
            <div style={{ margin: '15px' }}>
                <DesktopCard>
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
                                <BanglaTypo gutterBottom variant="h5">
                                    {title}
                                </BanglaTypo>
                                <BanglaTypo variant="body2" color="textSecondary">
                                    {exerpt}
                                </BanglaTypo>
                            </CardContent>
                        </CardActionArea>
                    </Link>
                </DesktopCard>
                
                <MobileCard>
                    <Link href={`/post/${_id}`} passHref>
                        <CardActionArea>
                            <div style={s.card}>
                                <img width="50%" src={image} alt="postImg" />
                                <div className="card" style={s.info}>
                                    <h5>{title}</h5>
                                    <p style={s.p}>{exerpt}</p>
                                </div>
                            </div>
                        </CardActionArea>
                    </Link>
                </MobileCard>
            </div>
        </Grid>
    )
}

export default PostCard