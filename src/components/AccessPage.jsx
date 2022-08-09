import * as React from 'react'

function AccessPage() {

  return (
    <div className='m-10 text-lg space-y-3 bg-slate-500 bg-opacity-5 p-3 rounded-md'>
      <div >
                <h1><strong>Accessibility Statement</strong></h1>
                <p class="h5 fw300 doc-websiteUrl">URL: <a href="edvisorapp.com" target="_blank">edvisorapp.com</a></p>
                <p>Edvisor is committed to ensuring digital accessibility for people with disabilities. We are continually improving the user experience for everyone, and applying the relevant accessibility standards.</p>
            </div>
            <div class="doc-multiple" data-props="measeures|otherMeaseures">
                <h2><strong>Efforts to support accessibility</strong></h2>
                <p>Edvisor takes the following measures to ensure accessibility:</p>
                <ul class="doc-measeures mb0">
                    <li>Accessibility is part of our mission statement.</li><li>Accessibility is part of our internal policies.</li><li>Accessibility is integrated into our procurement practices.</li><li>Clear accessibility targets and responsibilities exist within the organization.</li>
                </ul>
                
            </div>
            <div class="doc-multiple" data-props="conformanceStatus|standardsApplied|otherStandardsApplied|additionalRequirements">
                <h2><strong>Conformance status</strong></h2>
                <div class="doc-standardsApplied">
                    <h3>Current accessibility standard of the site:</h3>
                    <p>Unknown</p>
                </div>
                
                <h3>Current content conformance status:</h3>
                <p class="doc-conformanceStatus">Unknown: the content has not been evaluated or the evaluation results are not available.</p>
                
            </div>
            
            
            <div class="doc-multiple" data-props="technologies|otherTechnologies">
                <h2><strong>Technologies</strong></h2>
                <p>Accessibility of this site relies on the following technologies to work:</p>
                <ul class="doc-technologies mb0">
                    <li>HTML</li><li>CSS</li><li>Javascript</li>
                </ul>
                <ul class="doc-otherTechnologies mb0">
                    <li>React</li><li>Chakra</li><li>Firebase</li>
                </ul>
                <p class="mt15"></p>
            </div>
            <div class="doc-multiple" data-props="approach|otherApproach">
                <h2><strong>Assessment methods</strong></h2>
                <p>Edvisor assessed the accessibility of this site using the following method(s):</p>
                <ul class="doc-approach mb0">
                    <li>Self-evaluation: the site was evaluated internally by the company or organization.</li>
                </ul>
                
            </div>
            
            <div class="doc-multiple" data-props="phone|email|postalAddress|responseDuration">
                <h2><strong>Feedback process</strong></h2>
                <p>We welcome your feedback on the accessibility of this site. Please contact us via one of the following methods:</p>
                <ul>
                    
                    <li class="doc-email">E-mail: <a href="mailto:edvisoruct@gmail.com">edvisoruct@gmail.com</a></li>
                    
                </ul>
                
            </div>
            
    </div>
  )
}

export default AccessPage