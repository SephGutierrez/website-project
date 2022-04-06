import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as AdminActions from '../../store/actions/adminActions';
import Paper from '@mui/material/Paper';
import FormControl from '@mui/material/FormControl';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import FormHelperText from '@mui/material/FormHelperText';
import { withStyles } from '@material-ui/core/styles';
import Button from '@mui/material/Button';
import SaveIcon from '@mui/icons-material/Save'; 
import { withFormik, Form } from 'formik';
import {FormikTextField,FormikSelectField} from  'formik-material-fields';
import * as Yup from 'yup';
import {withRouter} from 'react-router-dom';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';



const styles = theme => ({
    container: {
      margin: theme.spacing.unit * 3,
      display: 'flex',
      flexDirection: 'row wrap',
      width: '100%'
    },
    Save: {
      marginBottom: theme.spacing.unit * 2
    },
    formControl: {
      margin: theme.spacing.unit
    },
    leftSide: {
      flex: 2,
      height: '100%',
      margin: theme.spacing.unit * 1,
      padding: theme.spacing.unit * 3
    },
    rightSide: {
      flex: 1,
      height: '100%',
      margin: theme.spacing.unit * 1,
      padding: theme.spacing.unit * 3
    }
});

class AddPost extends Component {

  componentDidUpdate(props, state){
    if(this.props.match.params.view === 'add' &&
    this.props.admin.posts.filter(p => p.title === this.props.values.title).length > 0){
      const post = this.props.admin.posts.filter(p => p.title === this.props.values.title)[0];  
      this.props.history.push('/admin/posts/edit' + post.dispatch);
    }
    if(this.props.admin.post.id !== props.admin.post.id){
      //when redux state changes post in admin reducer
      this.props.setValues(this.props.admin.post);
    }
  }

   
  

  componentDidMount(props, state) {
    if(this.props.match.params.view === 'edit' && this.props.match.params.id) {
      this.props.getSinglePost(this.props.match.params.id, this.props.auth.token);
    }
  }

  // modules = {
  //   toolbar: [
  //     ['bold', 'italic', 'underline', 'strike']
  //     [{'header': 1}, {'header': 2}]
  //   ]
  // }

  // formats = [
  //   'header',
  //   'bold', 'italic', 'underline', 'strike', 'blockquote', 'script',
  //   'list', 'bullet', 'indent', 
  //   'link', 'image', 'color', 'code-block'
  // ]


  render() { 
    const {classes} = this.props;

    return (
      <div className={classes.container}>

      <h1>Add Post</h1>
      <Form>
        <Paper className={classes.leftSide}>
        <FormikTextField
            name="title"
            label="Title"
            margin= "normal"
            onChange= {e => this.props.setFieldValue('slug', e.target.value.toLowerCase().replace(/ /g, '_'))}
            fullWidth
        />
        <FormikTextField
            name="slug"
            label="Slug"
            margin= "normal"
        />
 
        <ReactQuill
            value={this.props.values.content}
            modules={this.modules}
            formats={this.formats}
            placeholder="Write anything u want" 
            onChange= {val => this.props.setFieldValue('content',val)}
        />
        <FormikTextField
            name="content"
            label="Content"
            margin= "normal"
            fullWidth
        />
        </Paper>
        <Paper className={classes.rightSide}>
            <FormikSelectField
                name="status"
                label="Status"
                margin= "normal"
                options= {[
                  {label: 'Unpublished', value: false},
                  {label: 'Published', value: true}
                ]}
                fullWidth
            />
            <div className={classes.Save}> 
            <Button
             variant="contained"
             color="secondary"
             onClick={e => {
               this.props.handleSubmit();
             }}
             >
            <SaveIcon />SAVE
            </Button>
            </div>
           {/* <div>
             <Button
             variant="contained"
             color="primary"
             onClick={e => {
              $('.MyFile').trigger('click');
             }}
             ><ImageIcon />Upload iMAGE</Button>
            <input type="file" style={{display: 'none'}} className="MyFile" />
           </div> */}
        </Paper>
      </Form>
      </div>
    );
  }
} 

const mapStateToProps = state => ({
  auth: state.auth,
  admin: state.admin
});

const mapDispatchToProps = dispatch => ({
  addPost: (post, token) => {
    dispatch(AdminActions.addPost(post, token));
  },
  updatePost: (post, token) => {
    dispatch(AdminActions.updatePost(post, token));
  },
  getSinglePost: (id, token) => {
    dispatch(AdminActions.getSinglePost(id, token));
  }
});
 
export default withRouter(connect(
  mapStateToProps, 
  mapDispatchToProps
)(withFormik({
  mapPropsToValues: (props) => ({
    title: props.admin.post.title || '', 
    slug:  props.admin.post.slug || '',
    createdAt: props.admin.post.createdAt ||'',
    status: props.admin.post.status || false,
    content: props.admin.post.content ||''
  }),
  validationSchema: Yup.object().shape({
      title: Yup.string().required('Title is required'),
      slug: Yup.string().required(),
      content: Yup.string().required()
  }),

  handleSubmit: (values, {setSubmitting, props}) => {
    console.log("Saving", props.addPost);
    if(props.match.params.view === 'edit'){
      const post = { //kpag clinick mo kasi yung save button, magccheck yan if edit gagawa ng bagong value
        ...values,
        id: props.match.params.id
      }
      props.updatePost(post, props.auth.token);
    }else {
      props.addPost(values, props.auth.token);
    }
   
  }
})(withStyles(styles)(AddPost))));