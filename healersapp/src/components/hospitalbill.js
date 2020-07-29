// import React from 'react';
// import { useState, useEffect } from 'react';
// import Grid from '@material-ui/core/Grid';
// import { makeStyles } from '@material-ui/core/styles';
// import clsx from 'clsx';
// import Card from '@material-ui/core/Card';
// import CardHeader from '@material-ui/core/CardHeader';
// import CardMedia from '@material-ui/core/CardMedia';
// import CardContent from '@material-ui/core/CardContent';
// import CardActions from '@material-ui/core/CardActions';
// import Collapse from '@material-ui/core/Collapse';
// import Avatar from '@material-ui/core/Avatar';
// import IconButton from '@material-ui/core/IconButton';
// import Typography from '@material-ui/core/Typography';
// import {Link} from 'react-router-dom'
// import { red } from '@material-ui/core/colors';
// import ShareIcon from '@material-ui/icons/Share';
// import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
// import MoreVertIcon from '@material-ui/icons/MoreVert';
// import Button from '@material-ui/core/Button'

// //testing 
// const useStyles = makeStyles((theme) => ({
// root: {
// alignText: "center",
// justifyContent:"center",
// maxWidth: 400,
// },
// media: {
// height: 0,
// paddingTop: '56.25%', // 16:9
// },
// expand: {
// transform: 'rotate(0deg)',
// marginLeft: 'auto',
// transition: theme.transitions.create('transform', {
// duration: theme.transitions.duration.shortest,
// }),
// },
// expandOpen: {
// transform: 'rotate(180deg)',
// },
// avatar: {
// backgroundColor: red[500],
// },
// }));
// export default function HospitalBill(props) {
// const { clases } = props;
// const classes = useStyles();
// const [expanded, setExpanded] = React.useState(false);
// const handleExpandClick = () => {
// setExpanded(!expanded);
// };

// return (
// <Grid
// container
// spacing={5}
// direction="column"
// alignItems="center"
// justify="center"
// style={{ minHeight: '100vh' }}
// >
// <Grid item xs={3}>




// <Card>
// <Card className={classes.root} >
// <CardHeader
// avatar={
// <Avatar aria-label="recipe" className={classes.avatar}>
// </Avatar>
// }
// action={
// <IconButton aria-label="settings">
// <MoreVertIcon />
// </IconButton>
// }
// title="Hospital Bill"
// subheader=""
// />
// <img src="https://miro.medium.com/max/3200/1*MpSlUJoxPjb9jk6PG525vA.jpeg"/>
// <ShareButton/>

// <CardMedia
// className={classes.media}
// // img or video:
// image="/static/images/cards/paella.jpg"
// />

// function MakePost(props){
//     const { clases } = props;
//     const classes = useStyles();
//     const [expanded, setExpanded] = React.useState(false);
//     const handleExpandClick = () => {
//     setExpanded(!expanded);
//     };
    
//     const [post, setpost] = useState([]);
   
//     useEffect(() => {
//       var data  = [{amount: "3000",hospialNam:"Farah",hospitalPhoneNumber:"3456789765",hospitalAddress:"yutregwfgfj",patientPhoneNumber:"87654324567",
//       photo:"https://cdnuploads.aa.com.tr/uploads/Contents/2020/05/14/thumbs_b_c_88bedbc66bb57f0e884555e8250ae5f9.jpg?v=140708"}, {amount: "30450",hospialNam:"Islamic",hospitalPhoneNumber:"345678987",hospitalAddress:"iojktrdgfkj",patientPhoneNumber:"0-9876545",
//       photo:"https://www.imgacademy.com/themes/custom/imgacademy/images/helpbox-contact.jpg"}]
        
//       setpost (data)
//       // fetch("/allpost")
//       //   .then(response => response.json())
//       //   .then(data => {
          
//       //     setpost(data)
//       //     console.log(data)
//       //   })
      
//      //use the axios under 
//        // axios
//     // .get("http://localhost:8000/allpost")
//     // .then(response => setpost(response.data));
//     }, [])

//     return (
//         <Grid
//         container
//         spacing={5}
//         direction="column"
//         alignItems="center"
//         justify="center"
//         style={{ minHeight: '100vh' }}
//         >
//         <Grid item xs={3}>
//           {post.map(item => (
//         <Card>
//         <Card className={classes.root} >
//         <CardHeader
//         avatar={
//         <Avatar aria-label="recipe" className={classes.avatar}>
//         </Avatar>
//         }
//         action={
//         <IconButton aria-label="settings">
//         <MoreVertIcon />
//         </IconButton>
//         }
//         title="Hospital Bill"
//         subheader=""
//         />
//         <CardMedia
//         className={classes.media}
//         // img or video:
//        // image="/static/images/cards/paella.jpg"
//          image = {item.photo}
//         title="Paella dish"
//         />
//          {/* <img src=/> */}
        
//         <CardContent>
//         <Typography variant="body2" color="textSecondary" component="p">
//         Bill amount:{item.amount}
//         </Typography>
//         </CardContent>
//         <CardActions disableSpacing>
//         <IconButton aria-label="share">
//         <ShareIcon />
//         </IconButton>
//         <IconButton
//         className={clsx(classes.expand, {
//         [classes.expandOpen]: expanded,
//         })}
//         onClick={handleExpandClick}
//         aria-expanded={expanded}
//         aria-label="show more"
//         >
//         <ExpandMoreIcon />
//         </IconButton>
//         </CardActions>
//         <Collapse in={expanded} timeout="auto" unmountOnExit>
//         <CardContent>
//         <Typography paragraph></Typography>
//         <Typography paragraph>
//         </Typography>
//         <Typography paragraph>
//         The description of patient health situation 
//         {item.amount}
//         </Typography>
//         <Typography paragraph>
//         Hospital Name 
//         {item.hospitalName}
//         </Typography>
//         <Typography>
//         Hospital Address 
//         {item.hospitalAddress}
//         </Typography>
//         <Typography>
//         Hospital phone number
//         {item.hospitalPhoneNumber}
//         </Typography>
//         <Typography>
//         Patient phone number
//         {item.patientPhoneNumber}
//         </Typography>
//         <Typography>
//         postedBy
//         {item.postedby}
//         </Typography>
//         <Typography>
//         <Button color="secondary">    <Link to="/IntersetForm">INTEREST</Link></Button>
//         </Typography>
//         </CardContent>
//         </Collapse>
        
//         </Card>
//         </Card>
//           ))}
//         </Grid> 
//         </Grid>
      
//         );
// }
// //   class HospitalBill extends  React.Component {
// //    // var storeMe;
// //    constructor(props){
// //     super(props);
// //     this.state = {
// //         storeMe:[]
// //     }
// // }
// // async componentDidMount(){  
// //      const that = this
// // await $.get('http://localhost:8000/mayis')
// //    .done( (result) =>{ console.log(result)
// //        that.setState({storeMe:result})
// //        console.log(that.state.storeMe)
// //          //storeMe=result
// //    })
// //    .fail( (jqxhr, settings, ex) =>{console.log('lala') })
// // }
// //    render(){
// //      const bill= this.state.storeMe
// //      console.log(bill)
// // return(
// //     <div>
// //     {bill.map((user,index)=>(<MakePost key={index}  userDAta={user} />))}
// //     </div>
// // )
// //     }}
// export default MakePost;
