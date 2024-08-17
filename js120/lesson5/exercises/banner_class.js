class Banner {
  constructor(message, bannerWidth) {
    this.message = message;
    this.fillerLength = this.message.length + 2;
    this.bannerWidth = (bannerWidth >= message.length) ? bannerWidth : this.fillerLength;
  }

  displayBanner() {
    console.log([this.horizontalRule(), this.emptyLine(), this.messageLine(), this.emptyLine(), this.horizontalRule()].join("\n"));
  }

  horizontalRule() {
    return `+${"-".padStart(this.bannerWidth, "-")}+`;
  }

  emptyLine() {
    return `|${" ".padStart(this.bannerWidth, " ")}|`;
  }

  messageLine() {
    let padding = Math.floor((this.bannerWidth - this.message.length) / 2);
    let endPadding = (this.bannerWidth % 2 === 1) ? (padding + 1) : padding;
    let formattedMessage = " ".repeat(padding) + this.message + " ".repeat(endPadding);

    return `|${formattedMessage}|`;
  }
}

let banner1 = new Banner('To boldly go where no one has gone before.', 75);
banner1.displayBanner();

let banner2 = new Banner('', 88);
banner2.displayBanner();