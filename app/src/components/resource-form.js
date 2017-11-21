import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import Input, { InputLabel } from 'material-ui/Input'
import { MenuItem } from 'material-ui/Menu'
import { FormControl, FormHelperText } from 'material-ui/Form'
import Select from 'material-ui/Select'
import TextField from 'material-ui/TextField'
import Button from 'material-ui/Button'
import { assoc } from 'ramda'

const styles = theme => ({
  input: {
    width: '50%',
    marginLeft: '25%'
  }
})

class ResourceForm extends React.Component {
  render() {
    const { classes } = this.props

    return (
      <form style={{ marginTop: 8 }}>
        <FormControl className={classes.input}>
          <InputLabel htmlFor="category">Category</InputLabel>
          <Select
            value={''}
            onChange={''}
            input={<Input id="category" />}
            autoWidth
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value="Basics Needs Assistance">
              Basics Needs Assistance
            </MenuItem>
            <MenuItem value="Benefits">Benefits</MenuItem>
            <MenuItem value="Employment">Employment</MenuItem>
            <MenuItem value="Government">Government</MenuItem>
          </Select>
        </FormControl>
        <TextField
          id="formalName"
          label="Formal Name"
          value={''}
          onChange={''}
          margin="normal"
          className={classes.input}
        />
        <TextField
          id="name"
          label="Name"
          value={''}
          onChange={''}
          margin="normal"
          className={classes.input}
        />
        <TextField
          id="shortDesc"
          label="Short Description"
          value={''}
          onChange={''}
          margin="normal"
          className={classes.input}
        />
        <TextField
          id="purpose"
          label="Purpose"
          value={''}
          onChange={''}
          margin="normal"
          className={classes.input}
        />
        <TextField
          id="website"
          label="Website"
          value={''}
          onChange={''}
          margin="normal"
          className={classes.input}
        />
        <Button
          raised
          color="primary"
          type="submit"
          style={{
            display: 'block',
            textAlign: 'center',
            margin: '0 auto',
            marginTop: 10
          }}
        >
          Submit
        </Button>
      </form>
    )
  }
}

ResourceForm.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(ResourceForm)
