# Things to Add to My Technical Journal once working
Uncaught TypeError: Cannot read property 'state' of undefined
-If on click event make sure that the on click event is bound in the constructor

class ManageEvents extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      reportedEvents: [],
    };
    this.handleChange=this.handleChange.bind(this);

  }

# How to render something AFTER state updates
Pass an arrow function as a second argument and that function runs after state is upated

  BEFORE: DOESN'T WORK
  onClickEntry(entry) {
    // console.log('CLICKED');
    this.setState({
      currentItem: entry,
      toRender: 'entry',
      module: 'entries',
      currentId: entry.id
    })
  };

  AFTER: THIS WORKS
  onClickEntry(entry) {
    // console.log('CLICKED');
    this.setState({
      currentItem: entry,
      toRender: 'entry',
      module: 'entries',
      currentId: entry.id
    },() => {
      this.getLinks()
    });

# React-Select Tutorial Really Good
https://medium.com/how-to-react/react-select-dropdown-tutorial-using-react-select-51664ab8b6f3

# Don't remove the wheelchair ramp
https://medium.com/hackernoon/removing-that-ugly-focus-ring-and-keeping-it-too-6c8727fefcd2#:~:text=You%20click%20a%20button%20and,clear%3A%20the%20outline%20must%20go.

# React-drop down scroll transparent
change z-index to 1000 in parent container
this will only work if the location of the modal

# Really Great React-Select Tutorial
https://medium.com/how-to-react/react-select-dropdown-tutorial-using-react-select-51664ab8b6f3

# Modal Heaven!!!
https://www.codeply.com/go/NiFzSCukVl/bootstrap-4-open-modal-from-another-modal
https://mdbootstrap.com/docs/standard/components/modal/

# Data Structures
https://medium.com/@dfriedenbach/the-two-stack-queue-ae5bbdc673be

# Contributors
Stephen H. Hyde https://github.com/birdhighway
Jihang Li https://github.com/jihangli10
Phil Teves https://github.com/philteves