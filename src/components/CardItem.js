import React, {useEffect, useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Container from "@material-ui/core/Container";

const useStyles = makeStyles({
    root: {
        display: 'inline-block',
        maxWidth: '360px',
        width: '30%',
        boxShadow: 'none',
        margin: '0 10px',
        borderRadius: '10px',
    },
    media: {
        height: '214px',
        borderRadius: '10px',
    },
    margin: {
        marginBottom: "30px",
        padding: '0 10%',
    },
    cardWrap: {
        textAlign: 'left',
    },
    tag: {
        padding: '6px 10px',
        background: '#e4e4e4',
        borderRadius: '10px',
        display: "inline-block"
    },
    cardTool: {
        padding: "10px 0",
        background: 'none',
    },
    cardAction: {
        padding: '10px 0',
        display: 'inline',
    },
    date: {
        float: 'right',
    },
    name: {
        float: 'left',
    },
    cardTitle: {
        margin: '20px 0 40px'
    }
});

const CardItem = ({blogData, selectedId}) => {
    const classes = useStyles();
    const [blog, setBlog] = useState([]);

    useEffect(() => {
        // filter blogs based on selected id of tool
        if (selectedId !== undefined) {
            let blogArr = blogData.filter((val) => {
                if (val?.toolId === selectedId) {
                    return val
                }
            })
            setBlog(blogArr)
        } else {
            setBlog(blogData)
        }
    }, [blogData, selectedId])

    return (
        <>
            <Container maxWidth="xl" className={classes.margin}>
                <div className={classes.cardWrap}>
                    {blog.length > 0 && blog?.map((item, i) => (
                        <Card key={i} className={classes.root}>
                            <CardMedia
                                className={classes.media}
                                image={item.image}
                            />
                            <CardContent className={classes.cardTool}>
                                <Typography className={classes.tag} variant="subtitle1" component="span">
                                    {item.tag}
                                </Typography>
                                <Typography className={classes.cardTitle} variant="h5" component="p">
                                    {item.label}
                                </Typography>
                            </CardContent>
                            <CardActions className={classes.cardAction}>
                                <Typography className={classes.name} variant="subtitle1" component="h2">
                                    {item.name}
                                </Typography>
                                <Typography className={classes.date} variant="subtitle1" component="h2">
                                    {item.date}
                                </Typography>
                            </CardActions>
                        </Card>
                    ))}
                    {blog?.length === 0 &&
                    <h1>No Data Found</h1>
                    }
                </div>
            </Container>
        </>
    );
};

export default CardItem;
