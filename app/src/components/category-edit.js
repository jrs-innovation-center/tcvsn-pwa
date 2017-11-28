import React from 'react'
import { withStyles } from 'material-ui/styles'
import TextField from 'material-ui/TextField'
import Button from 'material-ui/Button'
import EditIcon from 'material-ui-icons/ModeEdit'

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
      <form
        style={{ marginTop: 8 }}
        onSubmit={this.props.updateCategory(this.props.editCategory)}
      >
        <TextField
          label="Name"
          value={this.props.editCategory.name}
          onChange={e => {
            this.props.onChange('name', e.target.value)
          }}
          margin="normal"
          required
          className={classes.input}
        />
        <TextField
          label="Short Description"
          value={this.props.editCategory.shortDesc}
          onChange={e => {
            this.props.onChange('shortDesc', e.target.value)
          }}
          margin="normal"
          required
          className={classes.input}
          multiline
        />
        <TextField
          label="Description"
          value={this.props.editCategory.desc}
          onChange={e => {
            this.props.onChange('desc', e.target.value)
          }}
          margin="normal"
          required
          className={classes.input}
          multiline
        />
        <TextField
          label="Icon"
          value={this.props.editCategory.icon}
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
          <EditIcon />
        </Button>
      </form>
    )
  }
}

export default withStyles(styles)(CategoryForm)
