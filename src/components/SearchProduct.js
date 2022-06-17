import React, {useEffect, useState} from "react";
import InputBase from "@material-ui/core/InputBase";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Button from "@material-ui/core/Button";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Tools from "./Tools";

// import file
import BgImg from "../assets/bg-image.svg";
import toolImg1 from "../assets/tool1.svg";
import toolImg2 from "../assets/tool2.svg";
import toolImg3 from "../assets/tool3.svg";
import toolImg4 from "../assets/tool4.svg";
import toolImg5 from "../assets/tool5.svg";
import Place from "../assets/placeholder.svg";

//tool json
let data = [{id: 1, label: "Content Improver", image: toolImg1},
    {id: 2, label: "Clothing1", image: toolImg2},
    {id: 3, label: "Clothing2", image: toolImg3},
    {id: 4, label: "Clothing3", image: toolImg4},
    {id: 5, label: "Clothing4", image: toolImg5}];

//blog json
let blogData = [
    {
        id: 1,
        toolId: 1,
        label: "Content Improver",
        image: Place,
        tag: "Content improver",
        name: "jermy1",
        date: "may 11 2022"
    },
    {
        id: 2,
        toolId: 2,
        label: "Clothing1",
        image: Place,
        tag: "Content improver",
        name: "jermy2",
        date: "may 11 2022"
    },
    {
        id: 3,
        toolId: 3,
        label: "Clothing2",
        image: Place,
        tag: "Content improver",
        name: "jermy3",
        date: "may 11 2022"
    },
    {
        id: 4,
        toolId: 3,
        label: "Clothing2",
        image: Place,
        tag: "Content improver",
        name: "jermy4",
        date: "may 11 2022"
    },
    {
        id: 5,
        toolId: 5,
        label: "Clothing4",
        image: Place,
        tag: "Content improver",
        name: "jermy5",
        date: "may 11 2022"
    },
    {
        id: 6,
        toolId: 5,
        label: "Clothing4",
        image: Place,
        tag: "Content improver",
        name: "jermy5",
        date: "may 11 2022"
    },
    {
        id: 7,
        toolId: 5,
        label: "Clothing4",
        image: Place,
        tag: "Content improver",
        name: "jermy5",
        date: "may 11 2022"
    },
    {
        id: 8,
        toolId: 5,
        label: "Clothing4",
        image: Place,
        tag: "Content improver",
        name: "jermy5",
        date: "may 11 2022"
    },
    {
        id: 9,
        toolId: 3,
        label: "Clothing2",
        image: Place,
        tag: "Content improver",
        name: "jermy5",
        date: "may 11 2022"
    },
];

const useStyles = makeStyles((theme) => ({
    search: {
        position: 'relative',
        borderRadius: '10px',
        backgroundColor: '#fff',
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(3),
            width: 'auto',
        },
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        alignItems: 'center',
        justifyContent: 'center',
    },
    searchProduct: {
        textAlign: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        height: '350px',
        padding: '50px 0',
    },
    searchBar: {
        width: '400px',
        margin: '0 auto',
        textAlign: 'end',
        borderRadius: '10px',
    },
    mainTitle: {
        fontSize: '55px',
        fontWeight: '600',
        color: '#fff',
        width: '35%',
        margin: '0 auto 20px',
    },
    searchBtn: {
        backgroundColor: '#FEC724',
        position: 'absolute',
        right: '0',
        padding: '6.5px 8px',
        borderRadius: '0 10px 10px 0',
        textTransform: 'capitalize',
    },
    inputRoot: {
        width: '100%',
        padding: '3px 10px'
    },
    boxMargin: {
        paddingTop: '15px',
        paddingBottom: '15px',
    },
    breadCrumbCurrentPage: {
        color: '#7160FB'
    }

}));

const SearchProduct = () => {
    const classes = useStyles();
    const [text, setText] = useState("");
    const [tools, setTools] = useState([]);
    const [dupTools, setDupTools] = useState([]);
    const [blog, setBlog] = useState([]);

    useEffect(() => {

        setTools(data);
        setTools(data);
        setDupTools(data);
        setBlog(blogData);
    }, []);

    //handle search text
    const handleSearchText = event => {
        setText(event.target.value);
    };

    //handle tool data based on search text
    const handleSearchSubmit = () => {
        if (text !== "") {
            let values = dupTools.filter((val) => {
                if (val?.label?.toLowerCase().includes(text.toLowerCase())) {
                    return val
                }
            });
            setTools(values)
        } else {
            setTools(dupTools)
        }
    };

    return (
        <>
            <div className={classes.searchProduct} style={{backgroundImage: `url(${BgImg})`}}>
                <div className={classes.mainTitle}>
                    Top product news content marketing tips, and insights.
                </div>
                <div className={classes.searchBar}>
                    <div className={classes.search}>
                        <InputBase
                            placeholder="Search…"
                            classes={{
                                root: classes.inputRoot,
                                input: classes.inputInput,
                            }}
                            inputProps={{'aria-label': 'search'}}
                            onChange={(e) => handleSearchText(e)}
                        />
                        <Button className={classes.searchBtn} onClick={() => handleSearchSubmit()}>
                            Search
                        </Button>
                    </div>
                </div>
            </div>
            <Container maxWidth="xl" className={classes.boxMargin}>
                <Breadcrumbs aria-label="breadcrumb">
                    <Link color="inherit" href="/">
                        Home
                    </Link>
                    <Typography color="textPrimary" className={classes.breadCrumbCurrentPage}>Blog</Typography>
                </Breadcrumbs>
            </Container>
            <Tools tools={tools} blogData={blog}/>
        </>
    );
};

export default SearchProduct;
