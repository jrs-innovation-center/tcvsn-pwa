import React from 'react'

import { withStyles } from 'material-ui/styles'
import Input, { InputLabel } from 'material-ui/Input'
import { MenuItem } from 'material-ui/Menu'
import { FormControl, FormHelperText } from 'material-ui/Form'
import Select from 'material-ui/Select'
import TextField from 'material-ui/TextField'
import Button from 'material-ui/Button'
import SaveIcon from 'material-ui-icons/Save'
import { assoc } from 'ramda'
import { createCategory } from '../action-creators/categories'

const styles = theme => ({
  input: {
    width: '50%',
    marginLeft: 16,
    marginTop: 16,
    marginBottom: 8
  }
})

class CategoryForm extends React.Component {
  render() {
    const { classes } = this.props
    return (
      <form style={{ marginTop: 8 }} onSubmit={this.props.createCategory}>
        <TextField
          label="Name"
          value={this.props.category.name}
          onChange={e => {
            this.props.onChange('name', e.target.value)
          }}
          margin="normal"
          required
          className={classes.input}
        />
        <TextField
          label="Short Description"
          value={this.props.category.shortDesc}
          onChange={e => {
            this.props.onChange('shortDesc', e.target.value)
          }}
          margin="normal"
          required
          className={classes.input}
        />
        <TextField
          label="Description"
          value={this.props.category.desc}
          onChange={e => {
            this.props.onChange('desc', e.target.value)
          }}
          margin="normal"
          required
          className={classes.input}
        />
        <TextField
          label="Icon"
          value={this.props.category.icon}
          onChange={e => {
            this.props.onChange('icon', e.target.value)
          }}
          margin="normal"
          required
          className={classes.input}
        />
        <Button
          fab
          disabled={this.props.isActive}
          className="fab-button"
          color="primary"
          aria-label="add"
          type="submit"
        >
          <SaveIcon />
        </Button>
      </form>
    )
  }
}

export default withStyles(styles)(CategoryForm)
