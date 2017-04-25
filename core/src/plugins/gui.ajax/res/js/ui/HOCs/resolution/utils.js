import * as Actions from '../../Workspaces/editor/actions';
export { Actions }

export const mapStateToProps = (state, props) => ({
    ...state.tabs.filter(({editorData, node}) => editorData.id === props.editorData.id && node.getLabel() === props.node.getLabel())[0],
    ...props
})