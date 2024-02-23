module.exports = {
  getLinkActiveState(itemUrl, pageUrl) {
    let response = "";

    if (itemUrl === pageUrl) {
      response = ' aria-current="page"';
    }

    if (
      (itemUrl.length > 1 && pageUrl.indexOf(itemUrl) === 0) ||
      (itemUrl.length === 1 && itemUrl === pageUrl)
    ) {
      response += ' data-state="active"';
    }

    return response;
  },
};
