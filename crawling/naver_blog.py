import requests
from bs4 import BeautifulSoup

# The URL of the blog you want to crawl
base_url = "https://blog.naver.com/youngkbblog"

def get_blog_posts(url):
    response = requests.get(url)
    if response.status_code == 200:
        soup = BeautifulSoup(response.text.replace("\\",''), 'html.parser')
        print(soup)
        # Find and process blog post elements
        blog_posts = soup.find_all('div', class_='body')
        print(blog_posts)
        for post in blog_posts:
            post_title = post.find('h2').text
            post_content = post.find('div', class_='post-content').text
            
            print("Title:", post_title)
            print("Content:", post_content)
            print("="*50)
    else:
        print("Failed to retrieve the page.")

if __name__ == "__main__":
    get_blog_posts(base_url)