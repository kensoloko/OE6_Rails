Rails.application.config.assets.version = '1.0'
Rails.application.config.assets.precompile += %w(index_responsiveslides.js)
Rails.application.config.assets.precompile += %w(imagezoom.js)
Rails.application.config.assets.precompile += %w(jquery.flexslider.js)
Rails.application.config.assets.precompile += %w(flexslider.css)
Rails.application.config.assets.precompile += %w(single_animation.js)
Rails.application.config.assets.precompile += %w(User_profile.scss)

Rails.application.config.assets.precompile += %w( admin.css admin.js )
Rails.application.config.assets.paths << Rails.root.join("node_modules")
