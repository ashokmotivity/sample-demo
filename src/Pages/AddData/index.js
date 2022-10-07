import React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { AddStudent } from '../../redux/Student/student.actions';
import { useDispatch,useSelector} from 'react-redux';
import TableData from './TableData';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const AddData = () => {
    const dispatch = useDispatch();
    const {List} = useSelector(x=>{
        return {...x.student}
    });
    const [student,setStudent] = React.useState({
        name:"",
        class:"",
        grade:""
    })
    
    const [error,setError] = React.useState({
        name:"",
        class:"",
        grade:""
    })
    
    const onchangeHandler = (e) =>{
        setStudent({
            ...student,
            [e.target.name]:e.target.value
        })
    }


    const add = () =>{
        setError({
            name:"",
            class:"",
            grade:""
        })
        if(!student.name)
        {
            setError({
                ...error,
                name:"name is required"
            })
            return 
        }
        if(!student.class)
        {
            setError({
                ...error,
                class:"class is required"
            })
            return null
        }
        if(!student.grade)
        {
            setError({
                ...error,
                grade:"grade is required"
            })
            return null
        }
    
        if(student.name && student.class && student.grade){
            dispatch(AddStudent(student))
            setStudent({
                name:"",
                class:"",
                grade:""
            })
    
        }
        // console.log(loginDetails)
    }
    
    return <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
            <Grid item xs={4}>
                <Item>
                    <div>
                        <Box
                            component="div"
                            sx={{
                                textAlign: 'center',
                                '& .MuiTextField-root': { m: 1, width: '30ch' },
                                '& .MuiFormControl-root': { m: 1 },
                            }}
                            noValidate
                            autoComplete="off"
                        >
                            <div>

                                <TextField
                                    id="date"
                                    name='name'
                                    label="Name"
                                    value={student.name}
                                    onChange={onchangeHandler}
                                    error={error.name}
                                    helperText={error.name}
                                    sx={{ width: 220 }}
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                />
                                <TextField
                                    id="date-1"
                                    name='class'
                                    label="Class"
                                    value={student.class}
                                    onChange={onchangeHandler}
                                    error={error.class}
                                    helperText={error.class}
                                    sx={{ width: 220 }}
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                />
                                     <TextField
                                    id="date-1"
                                    name='grade'
                                    label="Grade"
                                    error={error.grade}
                                    helperText={error.grade}
                                    value={student.grade}
                                    onChange={onchangeHandler}
                                    sx={{ width: 220 }}
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                />
                                </div>
                                <div>

                        <Button variant="contained" color="primary" sx={{ margin: 1 }} onClick={add} > Add </Button>
                                {/* <Button variant="contained" color="primary" sx={{ margin: 1 }}> Serach </Button> */}
                            </div>
                        </Box>
                    </div>
                </Item>
            </Grid>
            <Grid item xs={8}>
                <Item>
                    <TableData  List = {List} />
                </Item>
            </Grid>

        </Grid>
    </Box>
}
export default AddData;