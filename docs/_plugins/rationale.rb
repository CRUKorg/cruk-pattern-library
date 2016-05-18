module Jekyll
  module Tags
    class RationaleBlock < Liquid::Block
      include Liquid::StandardFilters

      def render(context)
        id = "rationale-" + Time.now.strftime('%N')

        prefix = "<div class=\"panel-group\" id=\"#{id}\" role=\"tablist\">
          <div class=\"panel panel-default\">
            <div class=\"panel-heading\" role=\"tab\">
              <h4 class=\"panel-title\">
                <a role=\"button\" data-toggle=\"collapse\" data-parent=\"#{id}\" href=\"#{id}-1\">View pattern rationale</a>
              </h4>
            </div>
            <div id=\"#{}{id}-1\" class=\"panel-collapse collapse\" role=\"tabpanel\">
              <div class=\"panel-body\">"
        suffix = "</div>
                </div>
              </div>
            </div>"

        output = super.to_s.strip
        prefix + output + suffix
      end

    end
  end
end

Liquid::Template.register_tag('rationale', Jekyll::Tags::RationaleBlock)
