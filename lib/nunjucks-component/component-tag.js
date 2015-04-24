var nunjucks = require('nunjucks');

function Component(env) {
  this.tags = ['component'];

  this.parse = function(parser, nodes, lexer) {
    var tok = parser.nextToken();

    // Parse tag and collect arguments
    var args = parser.parseSignature(null, true);
    parser.advanceAfterBlockEnd(tok.value);

    // If arguments, return the fileTag constructed node
    if(args.children.length > 0)
      return new nodes.CallExtension(this, 'fileTag', args);

    // Otherwise parse until the close block and move the parser to the next position
    var body = parser.parseUntilBlocks('endmarkdown');
    parser.advanceAfterBlockEnd();

    // Return the constructed blockTag node
    return new nodes.CallExtension(this, 'blockTag', args, [body]);
  };

  // Example rendering for the file tag. Use the nunjucks.render function to render
  // the actual contents of the file. Pass the results through the code example template
  this.fileTag = function(context, file, options) {
    options = options || {};
    console.log(context);
    options['code'] = env.render(file, context);
    return new nunjucks.runtime.SafeString(env.render('component.html', options));
  }

  // Markdown rendering for the block. Get the body text and pass it through the
  // code example template
  this.blockTag = function(context, body) {
    context['code'] = body();
    return new nunjucks.runtime.SafeString(env.render('component.html', context));
  }
}

module.exports.register = function(env) {
  env.addExtension('component', new Component(env));
};
