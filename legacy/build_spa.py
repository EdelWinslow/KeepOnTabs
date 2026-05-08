import re

def extract_main_content(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Extract content inside <main> tags
    match = re.search(r'<main[^>]*>(.*?)</main>', content, re.DOTALL)
    if match:
        main_content = match.group(1)
    else:
        main_content = ""
        
    return main_content

def replace_images_with_placeholders(html_content, page_name):
    # Regex to find <img ... src="https://lh3.googleusercontent.com/..." ... >
    # and replace the src with placehold.co
    def replacer(match):
        img_tag = match.group(0)
        # Determine size based on a quick heuristic or just use 600x400
        size = "600x400"
        text = f"{page_name}+Image"
        if "aspect-square" in img_tag or "h-[400px]" in img_tag and "col-span-4" in img_tag:
            size = "400x400"
        elif "aspect-video" in img_tag:
            size = "640x360"
        elif "h-[400px]" in img_tag:
            size = "800x400"
        elif "h-[250px]" in img_tag:
            size = "400x250"
            
        new_src = f"https://placehold.co/{size}?text={text}"
        new_tag = re.sub(r'src="https://lh3\.googleusercontent\.com/[^"]+"', f'src="{new_src}"', img_tag)
        return new_tag

    return re.sub(r'<img[^>]+src="https://lh3\.googleusercontent\.com/[^"]+"[^>]*>', replacer, html_content)


pages = [
    {"id": "home", "file": "Home/index.html"},
    {"id": "gallery", "file": "Gallery/index.html"},
    {"id": "pricing", "file": "Pricing/index.html"},
    {"id": "tos", "file": "TOS/index.html"},
    {"id": "contact", "file": "Contacts/index.html"}
]

sections_html = ""
for page in pages:
    content = extract_main_content(page["file"])
    content = replace_images_with_placeholders(content, page["id"].capitalize())
    
    display_class = "" if page["id"] == "home" else "hidden"
    sections_html += f"""
      <section id="{page['id']}" class="page-section {display_class}">
{content}
      </section>
"""

# Extract full config from Contacts/index.html
with open('Contacts/index.html', 'r', encoding='utf-8') as f:
    contacts_html = f.read()

head_match = re.search(r'<head>(.*?)</head>', contacts_html, re.DOTALL)
head_content = head_match.group(1) if head_match else ""

# Add extra CSS classes from other files just in case
extra_styles = """
      .hard-shadow {
        box-shadow: 4px 4px 0px 0px #2b2f34;
      }
      .hard-shadow-hover:hover {
        transform: translate(2px, 2px);
        box-shadow: 2px 2px 0px 0px #2b2f34;
      }
      .hard-shadow-active:active {
        transform: translate(4px, 4px);
        box-shadow: 0px 0px 0px 0px #2b2f34;
      }
      .brutal-shadow {
        box-shadow: 4px 4px 0px 0px #2b2f34;
      }
      .brutal-shadow-hover:hover {
        transform: translate(2px, 2px);
        box-shadow: 2px 2px 0px 0px #2b2f34;
      }
      .brutal-shadow-active:active {
        transform: translate(4px, 4px);
        box-shadow: 0px 0px 0px 0px #2b2f34;
      }
"""
head_content = head_content.replace('</style>', extra_styles + '</style>')

header_match = re.search(r'<header[^>]*>(.*?)</header>', contacts_html, re.DOTALL)
header_content = header_match.group(0) if header_match else ""

# Fix header links
header_content = re.sub(r'href="\.\./Home/index\.html"', 'href="#home"', header_content)
header_content = re.sub(r'href="\.\./Gallery/index\.html"', 'href="#gallery"', header_content)
header_content = re.sub(r'href="\.\./Pricing/index\.html"', 'href="#pricing"', header_content)
header_content = re.sub(r'href="\.\./TOS/index\.html"', 'href="#tos"', header_content)
header_content = re.sub(r'href="\.\./Contacts/index\.html"', 'href="#contact"', header_content)

footer_match = re.search(r'<footer[^>]*>(.*?)</footer>', contacts_html, re.DOTALL)
footer_content = footer_match.group(0) if footer_match else ""

# The JS router
js_router = """
    <script>
      function handleRoute() {
        const hash = window.location.hash || '#home';
        document.querySelectorAll('.page-section').forEach(sec => {
          sec.classList.add('hidden');
        });
        
        const activeSection = document.querySelector(hash);
        if (activeSection) {
          activeSection.classList.remove('hidden');
        } else {
          // fallback to home
          document.querySelector('#home').classList.remove('hidden');
        }
        
        // Update nav links styling
        document.querySelectorAll('nav a').forEach(a => {
          if (a.getAttribute('href') === hash || (hash === '#home' && a.getAttribute('href') === '#home')) {
            a.className = "text-zinc-900 dark:text-white border-b-4 border-blue-400 pb-1";
          } else {
            a.className = "text-zinc-500 dark:text-zinc-400 hover:text-zinc-800 dark:hover:text-zinc-200 hover:translate-x-[2px] hover:translate-y-[2px] transition-all";
          }
        });
        window.scrollTo(0, 0);
      }

      window.addEventListener('hashchange', handleRoute);
      window.addEventListener('DOMContentLoaded', handleRoute);
      
      // Update logo link behavior
      document.addEventListener('DOMContentLoaded', () => {
        const logo = document.querySelector('header a[href="#home"]');
        if(logo) {
            logo.addEventListener('click', (e) => {
                window.location.hash = '#home';
            });
        }
        
        // Also update the hire me button
        const hireMe = document.querySelector('header button');
        if(hireMe) {
            hireMe.addEventListener('click', () => {
                window.location.hash = '#contact';
            });
        }
        
        // Add listeners to buttons inside sections that might act as links
        const viewPricingBtn = document.querySelector('#home button:contains("View Pricing")');
        const startProjectBtn = document.querySelector('#gallery button:contains("Start a Project")');
        
        document.querySelectorAll('button').forEach(btn => {
           if(btn.innerText.includes('View Pricing')) btn.addEventListener('click', () => window.location.hash = '#pricing');
           if(btn.innerText.includes('Portfolio')) btn.addEventListener('click', () => window.location.hash = '#gallery');
           if(btn.innerText.includes('Start a Project')) btn.addEventListener('click', () => window.location.hash = '#contact');
           if(btn.innerText.includes('Select Sketch')) btn.addEventListener('click', () => window.location.hash = '#contact');
           if(btn.innerText.includes('Select Lineart')) btn.addEventListener('click', () => window.location.hash = '#contact');
           if(btn.innerText.includes('Select Render')) btn.addEventListener('click', () => window.location.hash = '#contact');
           if(btn.innerText.includes('Read the FAQ')) btn.addEventListener('click', () => window.location.hash = '#tos');
        });
      });
    </script>
"""

final_html = f"""<!doctype html>
<html class="light" lang="en">
  <head>
{head_content}
  </head>
  <body class="bg-background text-on-background font-body-md overflow-x-hidden min-h-screen flex flex-col">
    {header_content}
    <main class="max-w-[1280px] mx-auto px-8 py-16 flex-grow w-full">
{sections_html}
    </main>
    {footer_content}
    {js_router}
  </body>
</html>
"""

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(final_html)

print("index.html created successfully.")
