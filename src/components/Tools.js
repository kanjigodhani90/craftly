import React, {useState} from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import CardItem from "./CardItem";

const useStyles = makeStyles((theme) => ({
    toolWrap: {
        boxShadow: '0px 7px 11px -8px rgba(56,56,56,.5)',
        marginBottom: '40px',
        padding: '20px 0',
        textAlign: 'center',
    },
    mainTitle: {
        fontSize: '32px',
        fontWeight: '500',
        marginBottom: '20px',
    },
    toolItem: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center'
    },
    tool: {
        display: 'block',
        margin: '10px 8px 15px',
        width: '215px',
        height: '211px',
        border: "1px solid #e4e4e4",
        borderRadius: "10px",
        padding: '40px 20px',
        textAlign: 'left',
    },
    active: {
        display: 'block',
        margin: '10px 8px 15px',
        width: '215px',
        height: '211px',
        border: "1px solid #e4e4e4",
        borderRadius: "10px",
        padding: '40px 20px',
        textAlign: 'left',
        background: '#8878F9'
    },
    toolImg: {
        marginBottom: '20px',
    },
    toolTitle: {
        fontSize: '24px',
        fontWeight: '500',
        color: '#282B3F',
    },
    toolTitleActive: {
        fontSize: '24px',
        fontWeight: '500',
        color: '#fff',
    }

}));

const Tools = ({tools, blogData}) => {
    const classes = useStyles();
    const [selectItemId, setSelectItemId] = useState(1);

    return (
        <>
            <div className={classes.toolWrap}>
                <div className={classes.mainTitle}>
                    Browse by tools
                </div>
                <div className={classes.toolItem}>
                    {tools.length > 0 && tools.map((item, i) => (
                        <div key={i} className={(item?.id !== selectItemId) ? classes.tool : classes.active}
                             onClick={() => setSelectItemId(item?.id)}>
                            <div className={classes.toolImg}>
                                <img src={item.image} alt='vendorImage'/>
                            </div>
                            <div
                                className={(item?.id !== selectItemId) ? classes.toolTitle : classes.toolTitleActive}>{item.label}</div>
                        </div>
                    ))}
                    {tools?.length === 0 &&
                    <h1>No Data Found</h1>
                    }
                </div>
            </div>
            <CardItem blogData={(tools.length === 0) ? [] : blogData} selectedId={selectItemId}/>
        </>
    );
};

export default Tools;
