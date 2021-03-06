module.exports = {
    webpack: (config, { webpack }) => {
        /* Hide error "Critical dependency: the request of a dependency is an expression" from remark-textr */
        config.plugins.push(
            new webpack.ContextReplacementPlugin(/remark-textr/)
        )

        return config
    }
}
