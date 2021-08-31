import { React, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import CircularProgress from '@material-ui/core/CircularProgress';

import { useHistory } from 'react-router-dom';
import { Button } from '@material-ui/core';
import PropTypes from "prop-types";
import clsx from "clsx";
import { lighten } from "@material-ui/core/styles";
import TableContainer from "@material-ui/core/TableContainer";
import TablePagination from "@material-ui/core/TablePagination";
import TableSortLabel from "@material-ui/core/TableSortLabel";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import FilterListIcon from "@material-ui/icons/FilterList";
import { getcomparisondata, fetchanalysisresult, getconversationlist } from '../../actions/dashboard';



function descendingComparator(a, b, orderBy) {
    if (b[orderBy] < a[orderBy]) {
        return -1;
    }
    if (b[orderBy] > a[orderBy]) {
        return 1;
    }
    return 0;
}

function getComparator(order, orderBy) {
    return order === "desc"
        ? (a, b) => descendingComparator(a, b, orderBy)
        : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
    const stabilizedThis = array.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
        const order = comparator(a[0], b[0]);
        if (order !== 0) return order;
        return a[1] - b[1];
    });
    return stabilizedThis.map((el) => el[0]);
}

const headCells = [

    { id: "protein", numeric: true, disablePadding: false, label: "Sr. No." },
    {
        id: "name",
        numeric: false,
        disablePadding: true,
        label: "Meeting Name"
    },
    { id: "calories", numeric: true, disablePadding: false, label: "Created At" },
    { id: "fat", numeric: true, disablePadding: false, label: "Conversation ID" },
    { id: "result", numeric: true, disablePadding: false, label: "View Results" },
    { id: "compare", numeric: true, disablePadding: false, label: "Add to Compare" },
];

function EnhancedTableHead(props) {
    const {
        classes,
        order,
        orderBy,
        onRequestSort
    } = props;
    const createSortHandler = (property) => (event) => {
        onRequestSort(event, property);
    };

    return (
        <TableHead >
            <TableRow>
                {headCells.map((headCell) => (
                    <TableCell
                        key={headCell.id}
                        align={"center"}
                        padding={headCell.disablePadding ? "none" : "normal"}
                        sortDirection={orderBy === headCell.id ? order : false}
                        style={{ fontSize: '25px' }}
                    >
                        <TableSortLabel
                            active={orderBy === headCell.id}
                            direction={orderBy === headCell.id ? order : "asc"}
                            onClick={createSortHandler(headCell.id)}
                        >
                            {headCell.label}
                            {orderBy === headCell.id ? (
                                <span className={classes.visuallyHidden}>
                                    {order === "desc" ? "sorted descending" : "sorted ascending"}
                                </span>
                            ) : null}
                        </TableSortLabel>
                    </TableCell>
                ))}
            </TableRow>
        </TableHead>
    );
}

EnhancedTableHead.propTypes = {
    classes: PropTypes.object.isRequired,
    numSelected: PropTypes.number.isRequired,
    onRequestSort: PropTypes.func.isRequired,
    onSelectAllClick: PropTypes.func.isRequired,
    order: PropTypes.oneOf(["asc", "desc"]).isRequired,
    orderBy: PropTypes.string.isRequired,
    rowCount: PropTypes.number.isRequired
};

const useToolbarStyles = makeStyles((theme) => ({
    root: {
        paddingLeft: theme.spacing(2),
        paddingRight: theme.spacing(1)
    },
    highlight:
        theme.palette.type === "light"
            ? {
                color: theme.palette.secondary.main,
                backgroundColor: lighten(theme.palette.secondary.light, 0.85)
            }
            : {
                color: theme.palette.text.primary,
                backgroundColor: theme.palette.secondary.dark
            },
    title: {
        flex: "1 1 100%"
    }
}));

const EnhancedTableToolbar = (props) => {
    const classes = useToolbarStyles();
    const { selected, numSelected } = props;
    const dispatch = useDispatch()
    const history = useHistory();

    const handleCompareClick = () => {
        console.log(selected, "Sssa")
        const [conversationId1, conversationId2] = selected
        console.log(conversationId1, conversationId2, "hghghghg")
        dispatch(getcomparisondata(conversationId1, conversationId2, history));
    }

    return (
        <Toolbar
            className={clsx(classes.root, {
                [classes.highlight]: numSelected > 0
            })}
        >
            {numSelected > 0 ? (
                <Typography
                    className={classes.title}
                    color="inherit"
                    variant="subtitle1"
                    component="div"
                >
                    {numSelected} Selected
                </Typography>
            ) : (
                <Typography
                    className={classes.title}
                    variant="h6"
                    id="tableTitle"
                    component="div"
                >
                    Select 2 rows to compare
                </Typography>
            )}

            {numSelected == 2 ? (
                <Tooltip title="Delete">

                    <Button onClick={handleCompareClick} >Compare</Button>
                </Tooltip>
            ) : (
                <Tooltip title="Filter list">
                    <IconButton aria-label="filter list">
                        <FilterListIcon />
                    </IconButton>
                </Tooltip>
            )}
        </Toolbar>
    );
};

EnhancedTableToolbar.propTypes = {
    numSelected: PropTypes.number.isRequired
};

const useStyles = makeStyles((theme) => ({
    root: {
        width: "100%",
        backgroundColor: '#e8e8e8'

    },
    paper: {
        width: "100%",
        marginBottom: theme.spacing(2),
        backgroundColor: '#e8e8e8'
    },
    table: {
        minWidth: 750,
        backgroundColor: '#e8e8e8'

    },
    visuallyHidden: {
        border: 0,
        clip: "rect(0 0 0 0)",
        height: 1,
        margin: -1,
        overflow: "hidden",
        padding: 0,
        position: "absolute",
        top: 20,
        width: 1
    }
}));




function preventDefault(event) {
    event.preventDefault();
}



export default function Tables() {
    const dispatch = useDispatch();
    const history = useHistory();
    const classes = useStyles();

    const conversationId1 = "5024370436079616";
    const conversationId2 = "5665967414706176";

    useEffect(() => {
        dispatch(getconversationlist());

    }, []);

    const tableData = useSelector((state) => state.dashboard.conversationList.conversationIdData);
    console.log(tableData, "meow")


    const [order, setOrder] = useState("asc");
    const [orderBy, setOrderBy] = useState("calories");
    const [selected, setSelected] = useState([]);
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);

    const handleRequestSort = (event, property) => {
        const isAsc = orderBy === property && order === "asc";
        setOrder(isAsc ? "desc" : "asc");
        setOrderBy(property);
    };


    const handleClick = (event, name) => {
        const selectedIndex = selected.indexOf(name);
        let newSelected = [];

        if (selectedIndex === -1) {
            newSelected = newSelected.concat(selected, name);
        } else if (selectedIndex === 0) {
            newSelected = newSelected.concat(selected.slice(1));
        } else if (selectedIndex === selected.length - 1) {
            newSelected = newSelected.concat(selected.slice(0, -1));
        } else if (selectedIndex > 0) {
            newSelected = newSelected.concat(
                selected.slice(0, selectedIndex),
                selected.slice(selectedIndex + 1)
            );
        }

        setSelected(newSelected);
        console.log(newSelected, "ff");
    };

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const isoToDate = (createdAt) => {
        var date = new Date(createdAt);
        var year = date.getFullYear();
        var month = date.getMonth() + 1;
        var dt = date.getDate();

        if (dt < 10) {
            dt = '0' + dt;
        }
        if (month < 10) {
            month = '0' + month;
        }
        return (dt + '-' + month + '-' + year);

    }

    // const isSelected = (name) => selected.indexOf(name) !== -1;
    const isSelected = (conversationId) => selected.indexOf(conversationId) !== -1;

    const emptyRows =
        rowsPerPage - Math.min(rowsPerPage, tableData?.length - page * rowsPerPage);
    const handleButtonClick = (conversationId) => {
        dispatch(fetchanalysisresult(conversationId, history))
    }
    const spinner = <div style={{ alignContent: 'center', textAlign: 'center', justifyContent: 'center', marginTop: '8rem' }}>
        <CircularProgress />
        <Typography variant="body1" style={{ display: 'block', textAlign: 'center', marginTop: '2rem' }}>Loading meeting history</Typography>
    </div>
    console.log(page, "-page");
    console.log(rowsPerPage, "-rowsperpage");
    return (

        <div className={classes.root} >
            {tableData === undefined ? (spinner) : (
                <>
                    <EnhancedTableToolbar selected={selected} numSelected={selected.length} />
                    <TableContainer>
                        <Table
                            className={classes.table}
                            aria-labelledby="tableTitle"
                            size="medium"
                            aria-label="enhanced table"
                        >
                            <EnhancedTableHead
                                classes={classes}
                                numSelected={selected.length}
                                order={order}
                                orderBy={orderBy}
                                onRequestSort={handleRequestSort}
                                rowCount={tableData.length}
                            />
                            <TableBody>
                                {stableSort(tableData, getComparator(order, orderBy))
                                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                    .map((row, index) => {
                                        // const isItemSelected = isSelected(row.name);
                                        const isItemSelected = isSelected(row.conversationId);
                                        const labelId = `enhanced-table-checkbox-${index}`;

                                        return (
                                            <TableRow
                                                hover
                                                // onClick={(event) => handleClick(event, row.name)}
                                                aria-checked={isItemSelected}
                                                tabIndex={-1}
                                                key={row.conversationId}
                                                // key={row.name}
                                                selected={isItemSelected}

                                            >
                                                <TableCell
                                                    component="th"
                                                    id={labelId}
                                                    scope="row"
                                                    padding="none"
                                                    align="center"
                                                    style={{ fontSize: '18px' }}
                                                >
                                                    {page * rowsPerPage + index + 1}
                                                </TableCell>
                                                <TableCell align="center" style={{ fontSize: '18px' }}>{row.meetingName}</TableCell>
                                                <TableCell align="center" style={{ fontSize: '18px' }}>{isoToDate(row.createdAt)}</TableCell>
                                                <TableCell align="center" style={{ fontSize: '18px' }}>{row.conversationId}</TableCell>
                                                <TableCell align="center" style={{ fontSize: '18px' }}>
                                                    <Button variant="contained" color="primary" onClick={() => (handleButtonClick(row.conversationId))}>
                                                        View
                                                    </Button>

                                                </TableCell>
                                                <TableCell padding="checkbox">
                                                    <Checkbox
                                                        checked={isItemSelected}
                                                        inputProps={{ "aria-labelledby": labelId }}
                                                        disabled={(selected.length == 2 && !isItemSelected) ? true : false}
                                                        // onClick={(event) => handleClick(event, row.name)}
                                                        onClick={(event) => handleClick(event, row.conversationId)}
                                                    />
                                                </TableCell>
                                            </TableRow>
                                        );
                                    })}
                                {emptyRows > 0 && (
                                    <TableRow style={{ height: (53) * emptyRows }}>
                                        <TableCell colSpan={6} />
                                    </TableRow>
                                )}
                            </TableBody>
                        </Table>
                    </TableContainer>

                    <TablePagination
                        rowsPerPageOptions={[5, 10, 25]}
                        component="div"
                        count={tableData.length}
                        rowsPerPage={rowsPerPage}
                        page={page}
                        onPageChange={handleChangePage}
                        onRowsPerPageChange={handleChangeRowsPerPage}
                    />
                </>
            )}
        </div>
    );
}