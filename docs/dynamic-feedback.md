---
layout: page
title: Dynamic Feedback
---

Where possible, we should feedback to the user what is happening with their inputs


## Throbbing

To demonstrate that something is happening behind the scenes (for example, you're checking the input of a field using an ajax call) you should use a 'throbber'.
This will require a spot of javascript as well as just mark up in order to achieve.

{% example html %}
<form>
  <div class="form-group has-feedback">
    <input type="text" class="form-control" id="inputExample1" aria-describedby="inputExample1Status">
    <span class="form-control-feedback" aria-hidden="true"></span>
    <span id="inputExample1Status" class="sr-only"></span>
  </div>
</form>
{% endexample %}

Then you just need to use the following javascript to attach the throbber.

{% highlight javascript %}
$('#inputExample1').on('blur', function() {
  $(this).find('span.form-control-feedback').crukInputDynamicSpin();
  // Do something that takes a long time...
  $(this).find('span.form-control-feedback').crukInputDynamicSpin(false);
});
{% endhighlight %}


## Bouncy ball

<span class="label label-danger">Proposed new pattern</span>

Meant as a general purpose class that can be applied to a text input. If a field is waiting for data for example an autocomplete you'll want to wrap it in a span with the class <code>.cr-has-feedback</code>. This will work on any wrapping element of the input.

When the field is waiting for data add the <code>.cr-has-feedback--active</code> class, when it's been received simply remove it.

{% example html %}
<form>
  <div class="form-group">
    <label for="input-id-1">Field pending data</label>
    <span class="cr-has-feedback cr-has-feedback--active">
      <input placeholder="Useful example" class="form-control" type="text" id="input-id-1" name="input-id-1">
    </span>
  </div>
</form>
{% endexample %}


## Success

To show that the field has been successfully evaluated, again, you'd set up your field with the appropriate markup

{% example html %}
<form>
  <div class="form-group has-feedback">
    <input type="text" class="form-control" id="inputExample2" aria-describedby="inputExample2Status">
    <span class="form-control-feedback" aria-hidden="true"></span>
    <span id="inputExample2Status" class="sr-only"></span>
  </div>
</form>
{% endexample %}

And then use the following jQuery plugin to mark the field as successfully entered

{% highlight javascript %}
$('#inputExample2').crukInputDynamicSuccess();
{% endhighlight %}

As with the Throbber, passing a false into the function will remove the element. It's also worth noting that if you're marking a success after the throbber, you don't need to clear the throbber first, the crukInputDynamicSuccess() function will do this for you!
