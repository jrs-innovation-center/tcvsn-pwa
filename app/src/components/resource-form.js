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
      <form style={{ marginTop: 8 }} autoComplete="off">
        <FormControl className={classes.input}>
          <InputLabel htmlFor="category">Category</InputLabel>
          <Select
            name="category"
            value={this.props.newResource.category}
            onChange={e => {
              this.props.onChange('category', e.target.value)
            }}
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
          name="formalName"
          label="Formal Name"
          value={this.props.newResource.formalName}
          onChange={e => {
            this.props.onChange('formalName', e.target.value)
          }}
          margin="normal"
          className={classes.input}
        />
        <TextField
          name="name"
          label="Name"
          value={this.props.newResource.name}
          onChange={e => {
            this.props.onChange('name', e.target.value)
          }}
          margin="normal"
          className={classes.input}
        />
        <TextField
          name="shortDesc"
          label="Short Description"
          value={this.props.newResource.shortDesc}
          onChange={e => {
            this.props.onChange('shortDesc', e.target.value)
          }}
          margin="normal"
          className={classes.input}
        />
        <TextField
          name="purpose"
          label="Purpose"
          value={this.props.newResource.purpose}
          onChange={e => {
            this.props.onChange('purpose', e.target.value)
          }}
          margin="normal"
          className={classes.input}
        />
        <TextField
          name="website"
          label="Website"
          value={this.props.newResource.website}
          onChange={e => {
            this.props.onChange('website', e.target.value)
          }}
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
