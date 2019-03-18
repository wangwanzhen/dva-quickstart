const color = {
	primary:'rgb(25,140,255)',
	assist:'rgb(236,246,255)',
	tableHead:'rgb(239,240,242)'
}
module.exports = function() {
  return {
    'primary-color': color.primary,
    'link-color': '#1DA57A',
    'border-radius-base': '4px',
    'brand-primary':color.primary,
    'btn-default-color':color.primary,
    'btn-default-border':color.primary,
    'tooltip-color':color.primary,
    'tooltip-arrow-color':color.assist,
    'tooltip-bg':color.assist,
    'table-header-bg':color.tableHead
  };
};
