// https://github.com/postcss/postcss-plugin-boilerplate/blob/main/template/index.t.js
/**
 * @type {import('postcss').PluginCreator}
 * @param {Object} opts
 * @param {boolean} [opts.debug=false]
 * */
module.exports = (opts = { debug: false }) => {
	const { debug } = opts ?? {};
	return {
		postcssPlugin: "postcss-hotfix",
		Declaration(decl) {
			if (decl.value?.includes("var(--tw-")) {
				debug && console.log("Found Tailwind var:", decl.value);
				decl.value = decl.value.replace(/,\)/g, ")");
				debug && console.log("Fixed to:", decl.value);
			}
		},
		/*
    Root (root, postcss) {
      // Transform CSS AST here
    }
    */
		/*
    Declaration (decl, postcss) {
      // The faster way to find Declaration node
    }
    */
		/*
    Declaration: {
      color: (decl, postcss) {
        // The fastest way find Declaration node if you know property name
      }
    }
    */
	};
};

module.exports.postcss = true;
