module RedmineCustomQueries
  class Hooks < Redmine::Hook::ViewListener

    #adds our css on each page
    def view_layouts_base_html_head(context)
      stylesheet_link_tag("custom_queries", :plugin => "redmine_custom_queries_enhancement") +
          javascript_include_tag("custom_queries", :plugin => "redmine_custom_queries_enhancement")
    end

  end
end
